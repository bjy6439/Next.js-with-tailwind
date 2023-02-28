import Link from "next/link";
import React from "react";

const ProjectItem = ({ aProject }) => {
  //   console.log(aProject);
  const title = aProject.properties.이름.title[0]?.text.content;
  const github = "http://www.naver.com";
  return (
    <>
      <div className="p-6 m-3 bg-slate-700 rounded-md">
        <h1>{title}</h1>
        <Link href={github}>github 바로가기</Link>
      </div>
    </>
  );
};

export default ProjectItem;
