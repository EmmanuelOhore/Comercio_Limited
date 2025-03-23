import TeamMemebers from "./teamMembers";
function TeamComponents() {
  return (
    <section className=" flex flex-col items-center gap-[4rem]  py-[2rem] mt-8  max-phoneL:mt-3 max-phoneL:py-[1rem] ">
      <div className=" w-[90%]  flex  items-center flex-col  gap-10 p-4 max-tablet:gap-5 max-tablet:w-full ">
        <header className="gap-3 self-start flex flex-col max-phoneP:gap-1">
          <h2 className="text-4xl font-bold text-black/80  max-tablet:text-3xl max-phoneL:text-2xl max-phoneP:text-xl ">
            Our Team
          </h2>
          <h3 className="text-lg max-tablet:text-base text-black/74 max-phoneL:text-sm max-phoneP:text-xs">
            A short introduction to the team members and why their background
            should inspire potential clients’ confidence to engage our services
          </h3>
        </header>
        <TeamMemebers />
      </div>
    </section>
  );
}

export default TeamComponents;
