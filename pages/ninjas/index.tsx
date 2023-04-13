import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }: any) => {
  return (
    <>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja: any) => (
        <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
          {ninja.name}
        </Link>
      ))}
    </>
  );
};

export default Ninjas;
