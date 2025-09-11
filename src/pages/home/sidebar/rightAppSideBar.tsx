import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/RightSideBar";
import SideBarElement from "@/components/Home/Sidebar/sideBarElement";
import { FiSearch, FiMoreHorizontal } from "react-icons/fi";
import { contacts } from "@/data/contacts.tsx";

export default function RightAppSidebarHome() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent className="overflow-y-auto  ">
          {/* Shortcuts group */}
          <div className="mt-1.5 ml-0 pl-0 p-4 border-t mb-1.5 border-gray-100 bg-transparent">
            <div className="text-md font-semibold text-gray-500 text-left mb-2">
              Sponsored
            </div>
          </div>
          <SidebarGroup className="pl-2">
            <SidebarMenu className="space-y-0">
              {
                <SidebarMenuItem className="relative">
                  <SidebarMenuButton className="p-0 h-auto w-full bg-transparent">
                    <div className="w-full min-h-[64px] relative">
                      {/* Ads Section */}
                      <div className="w-full">
                        <div className="mb-3 w-full rounded-lg overflow-hidden shadow border border-gray-200 bg-white flex flex-col items-center">
                          <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                            alt="Ad 1"
                            className="w-full h-28 object-cover"
                          />
                          <div className="p-2 w-full text-center">
                            <span className="font-semibold text-sm text-gray-800">
                              Upgrade your experience!
                            </span>
                            <p className="text-xs text-gray-500 mt-1">
                              Try our premium features for free.
                            </p>
                          </div>
                        </div>
                        <div className="w-full rounded-lg overflow-hidden shadow border border-gray-200 bg-white flex flex-col items-center">
                          <img
                            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                            alt="Ad 2"
                            className="w-full h-28 object-cover"
                          />
                          <div className="p-2 w-full text-center">
                            <span className="font-semibold text-sm text-gray-800">
                              Discover new groups
                            </span>
                            <p className="text-xs text-gray-500 mt-1">
                              Join communities that match your interests.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              }
            </SidebarMenu>
          </SidebarGroup>

          {/* Contacts group */}
          <SidebarGroup className="pl-2 border-t-2 border-gray-200 relative">
            <div className="pb-4 pl-4 pr-4 border-t border-gray-100 bg-transparent left-0 flex items-center justify-between">
              <div className="text-md font-semibold text-gray-500">
                Contacts
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                  <FiSearch className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                  <FiMoreHorizontal className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            <SidebarMenu className="space-y-0 border-b-2 border-gray-200 pb-2">
              {contacts.slice(0, 15).map((contact, i) => (
                <SidebarMenuItem className="relative" key={i}>
                  <SidebarMenuButton className="p-0 h-auto w-full hover:bg-transparent transition-colors">
                    <div className="w-full min-h-[64px] relative">
                      <SideBarElement
                        icon={<div className="relative">{contact.icon}</div>}
                        href={contact.href}
                        text={contact.name ? contact.name : "Unknown"}
                      />
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
