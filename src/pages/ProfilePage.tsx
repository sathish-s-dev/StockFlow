import MultistepFrom from "@/components/profile/MultistepFrom";
import SectionWrapper from "@/components/ui/SectionWrapper";

const ProfilePage = () => {
  return (
    <main className="px-4">
      <SectionWrapper className="dark:text-white min-h-screen">
        <h1>Profile Page</h1>

        <div className="w-full  py-24 flex justify-center items-center">
          <MultistepFrom />
        </div>
      </SectionWrapper>
    </main>
  );
};

export default ProfilePage;
