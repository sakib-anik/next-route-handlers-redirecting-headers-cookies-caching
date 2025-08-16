import comments from "@/data/comments";

// export async function GET(_request, { params }) {
//   const commentId = params.id;
//   if (parseInt(commentId) > comments.length) redirect("/api/comments");
//   let comment = comments.find((comment) => comment.id === parseInt(commentId));
//   return Response.json(comment);
// }

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  console.log(query);
  if (query) {
    const filteredComments = comments.filter((comment) =>
      comment.text.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
    return Response.json(filteredComments);
  }
  return Response.json(comments);
}

export async function PATCH(request, { params }) {
  const comment = await request.json();
  const commentId = params.id;
  let commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(commentId)
  );
  comments[commentIndex].text = comment.text;
  return Response.json(comments[commentIndex]);
}

export async function DELETE(_request, { params }) {
  const commentId = params.id;
  let commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(commentId)
  );
  let commentToBeDeleted = comments[commentIndex];
  comments.splice(commentIndex, 1);
  return Response.json(commentToBeDeleted);
}
