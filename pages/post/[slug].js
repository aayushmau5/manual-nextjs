import { useRouter } from "next/router";

function Post() {
  const router = useRouter();
  const { slug } = router.query;
  return <div>{slug}</div>;
}

export default Post;
