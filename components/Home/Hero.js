import Link from "next/link";
import MainAnime from "./MainAnime";

export default function Hero() {
  return (
    <div className="flex w-full items-center justify-center h-100vw">
      <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
          안녕하세요 Front-End 신입 개발자
          <br />
          배경민입니다.
        </h1>
        {TextList.map(({ title, id }) => {
          return (
            <div key={id}>
              <h2 className="mb-3 leading-relaxed">{title}</h2>
            </div>
          );
        })}
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <Link href={"/projects"}>프로젝트 보러가기</Link>
          </button>
        </div>
      </div>
      <MainAnime />
    </div>
  );
}

const TextList = [
  { title: "Javascript와 React를 사용하는 주니어 개발자입니다.", id: 1 },
  { title: "메타본에서 인턴으로 실무 경험을 쌓고 있습니다.", id: 2 },
  {
    title: "부트캠프에서 동기들과 3회의 프로젝트를 하며 협업능력을 배웠습니다.",
    id: 3,
  },
];
