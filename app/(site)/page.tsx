import Header from "@/components/ui/Header";
import ListItem from "@/components/ui/ListItem";
export default function HomePage() {
  return <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
    <Header>
      <div className={"mb-2"}>
        <h1 className={"text-3xl font-semibold text-white"}>
          Welcome back
        </h1>
        <div
        className={`
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
          gap-3
          mt-4`}>

          <ListItem
            image={"https://picsum.photos/200"}
            name={"Liked Podcasts"}
            href={"liked"}
          />

        </div>
      </div>
    </Header>
  </div>;
}
