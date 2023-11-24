type CommentListItemProps = {
  email: string
  body: string
  name: string
};

export default function CommentListItem(props: CommentListItemProps) {
  const { email, body, name} = props;
  return (
    <>
      <small className="mx-2">
        <p className="font-semibold">{email}</p>
        <p  className="font-semibold mb-2 capitalize">Name: {name}</p>
        <p>{body}</p>
      </small>
      <hr />
    </>
  );
}