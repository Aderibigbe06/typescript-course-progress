export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>Home Page</div>
  );
}

// import { PageProps } from "../../.next/types/app/page";


// export default async function Page({ params }: { params: { topic: string } }) {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return (
//       <div>Topic Page: {params.topic}</div>
//   );
// }
