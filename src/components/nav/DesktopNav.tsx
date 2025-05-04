import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const DesktopNav = () => {
  return (
    <div className="hidden lg:flex gap-x-8 items-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 leading-tight tracking-tighter font-medium">
                <Link href="#companyName" title="company name">
                  I. Name of Company
                </Link>
                <Link href="#companyProfile" title="Company Profile">
                  II. Company Profile
                </Link>
                <Link
                  href="#department"
                  title="Division of Assignment
                </Link>"
                >
                  III. Department/Division of Assignment
                </Link>
                <Link href="#summary" title="Summary of Activities">
                  IV. Summary of Activities
                </Link>
                <Link href="#concerns" title="Trainee Concerns">
                  V. OJT-Trainee Concerns
                </Link>
                <Link href="#comments" title="Suggestions and Recommendations">
                  VI. Over-all Comments, Suggestions and Recommendations
                </Link>
                <Link href="#estimated" title="Number of Hours">
                  VII. Estimated Number of Hours
                </Link>
                <Link href="#journey" title="Journey Reflection">
                  VIII. My BSIT Internship Journey Reflection
                </Link>
                <Link href="#requirements" title="School Requirements">
                  IX. School Requirements
                </Link>
                <Link href="#appendix" title="Appendix">
                  IX. Appendix
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;
