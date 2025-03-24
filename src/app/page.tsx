// export default async function Page() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   return (
//     <div>Home Page</div>
//   );
// }

import { PageProps } from "../../.next/types/app/page";


// export default async function Page({ params }: { params: { topic: string } }) {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return (
//       <div>Topic Page: {params.topic}</div>
//   );
// }




// interface PageProps {
//   params: {
//     topic: string;
//   };
// }

// export default function Page({ params }: PageProps) {
//   return (
//     <div>
//       <h1>Topic: {params.topic}</h1>
//     </div>
//   );
// }

export default async function Page({ params }: PageProps) { // ✅ Use corrected PageProps
  console.log(params?.home); 
  return <div>Home Page</div>;
}
