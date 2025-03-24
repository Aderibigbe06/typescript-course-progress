// export default async function Page() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   return (
//     <div>Home Page</div>
//   );
// }


// export default async function Page({ params }: { params: { topic: string } }) {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return (
//       <div>Topic Page: {params.topic}</div>
//   );
// }



// export default function Page({ params }: { params: { topic: string } }) {
//   return (
//       <div>
//           <h1>Topic: {params.topic}</h1>
//       </div>
//   );
// }




interface PageProps {
  params: {
    topic: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <div>
      <h1>Topic: {params.topic}</h1>
    </div>
  );
}

