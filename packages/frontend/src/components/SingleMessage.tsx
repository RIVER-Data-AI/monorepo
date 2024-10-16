interface Props {
  body: string;
}

export function SingleMessage({ body }: Props) {
  return <div>{body}</div>;
}
