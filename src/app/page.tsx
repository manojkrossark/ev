import HomeOne from "@/components/homes/home-one";
import HomeSeven from "@/components/homes/home-seven";
import Wrapper from "@/layouts/Wrapper";
export const metadata = {
  title: "Alto - Your EV’s Intelligent Assistant",
};
const index = () => {
  return (
    <Wrapper>
      <HomeSeven />
    </Wrapper>
  );
};

export default index;
