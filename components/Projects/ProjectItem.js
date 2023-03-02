import Image from "next/image";
import React from "react";

const ProjectItem = ({ aProject }) => {
  const title = aProject.properties.이름.title[0]?.text.content;
  const coverImg = aProject.cover.external?.url || aProject.cover.file.url;
  const stacks = aProject.properties.Stack.multi_select;
  const startDate = aProject.properties.WorkPeriod.date.start;
  const endDate = aProject.properties.WorkPeriod.date.end;
  const myWorks = aProject.properties.myWork.multi_select;

  return (
    <div className="project-container bg-box flex justify-center m-10 block w-[1200px] rounded-md">
      <div className="flex p-6 mr-10 bg-box rounded-md">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl mb-5">{title}</h1>
          <Image src={coverImg} width={500} height={500} alt={title} />
        </div>
        <div className="flex flex-col justify-center ml-[30px] w-[400px]">
          <h2 className="text-xl mb-3">사용 스택</h2>
          <div className="flex">
            {stacks.map((item) => {
              return (
                <p
                  className="w-[auto] p-3 h-[auto] rounded-md mb-3 mr-5"
                  key={item.id}
                >
                  {item.name}
                </p>
              );
            })}
          </div>
          <h2 className="text-xl mb-3">기간</h2>
          <p className="p-3 text-center rounded-md mb-3 mr-5 w-[300px]">
            {startDate} ~ {endDate ? endDate : "진행중"}
          </p>
          <h2 className="text-xl mb-5">작업 내용</h2>
          <div>
            {myWorks.map((item) => {
              return (
                <p
                  key={item.id}
                  className="inline-block w-[auto] p-3 h-[auto] rounded-md mb-3 mr-5"
                >
                  {item.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
