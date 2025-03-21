import TeamMemebers from "./teamMembers";
function TeamComponents() {
  return (
    <section className=" flex flex-col items-center gap-[4rem]  py-[2rem] mt-8  ">
      <div className=" w-[90%]  flex  items-center flex-col  gap-10 p-4 ">
        <header className="gap-3 self-start flex flex-col">
          <h2 className="text-4xl font-bold text-black/80 w-[70%] ">
            Our Team
          </h2>
          <h3 className="text-base font-light text-black/64">
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
