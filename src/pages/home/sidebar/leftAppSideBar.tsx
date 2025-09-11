import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/LeftSideBar";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import SideBarElement from "@/components/Home/Sidebar/sideBarElement";
import { useState } from "react";

export default function LeftAppSidebarHome() {
  // Main group logic
  const [showAllMain, setShowAllMain] = useState(false);
  const mainItems = [
    {
      icon: (
        <img
          src="https://scontent.fcai19-1.fna.fbcdn.net/v/t39.30808-1/513722315_2425144504527815_7208283078644997860_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=102&ccb=1-7&_nc_sid=28885b&_nc_ohc=P4-DqYe_GSkQ7kNvwFsm1x3&_nc_oc=Adlk2SNF1AiTbS5x4nH95YymcaUQaSFyR4lmmtMfS7Jmesoc-hu7RR1Ge1cWHO9AK4g&_nc_zt=24&_nc_ht=scontent.fcai19-1.fna&_nc_gid=__rR5I1hMYjHMWbZOlyn5g&oh=00_Afa_CDYbOXbUYLwo5Auz4OJYqWwSyvEXdNH3cgKNz2M1Vg&oe=68C6775F"
          alt="Yossif Hafney"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Yossif Hafney",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yX/r/w5I9ktz_3Ib.png"
          alt="Meta AI"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Meta AI",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yA/r/FVAeV5GPLIk.png"
          alt="Friends"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Friends",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yA/r/FVAeV5GPLIk.png"
          alt="Memories"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Memories",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yA/r/FVAeV5GPLIk.png"
          alt="Saved"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Saved",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yA/r/FVAeV5GPLIk.png"
          alt="Groups"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Groups",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yA/r/FVAeV5GPLIk.png"
          alt="Ads Manager"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Ads Manager",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yq/r/_iR-92BGwSA.png"
          alt="Chat with AIs"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Chat with AIs",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yu/r/PbIrRdI6eiL.png"
          alt="Events"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Events",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yA/r/FVAeV5GPLIk.png"
          alt="Feeds"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Feeds",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/eECk3ceTaHJ.png"
          alt="Gaming Video"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Gaming Video",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yJ/r/fGWbDwbx9W4.png"
          alt="Marketplace"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Marketplace",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yA/r/FVAeV5GPLIk.png"
          alt="Messenger"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Messenger",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yQ/r/TEVA8fSObBd.png"
          alt="Messenger Kids"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Messenger Kids",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yN/r/6Z9DShdc7zU.png"
          alt="Orders and payments"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Orders and payments",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yv/r/GJ4EaivDaSj.png"
          alt="Pages"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Pages",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yA/r/FVAeV5GPLIk.png"
          alt="Play games"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Play games",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yA/r/FVAeV5GPLIk.png"
          alt="Recent ad activity"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Recent ad activity",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yA/r/FVAeV5GPLIk.png"
          alt="Reels"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Reels",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yv/r/x2_LFd7gCqg.png"
          alt="Video"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Video",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yA/r/FVAeV5GPLIk.png"
          alt="Video"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Video",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yA/r/FVAeV5GPLIk.png"
          alt="Video"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Video",
      href: "#",
    },
  ];

  // Shortcuts group logic
  const [showAllShortcuts, setShowAllShortcuts] = useState(false);
  const shortcutItems = [
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
          alt="Facebook"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Facebook Page",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
          alt="Twitter"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Twitter Profile",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
          alt="Instagram"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Instagram",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
          alt="LinkedIn"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "LinkedIn",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
          alt="YouTube"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "YouTube",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384062.png"
          alt="Pinterest"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Pinterest",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384061.png"
          alt="Snapchat"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Snapchat",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
          alt="Reddit"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Reddit",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384065.png"
          alt="Tumblr"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Tumblr",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384067.png"
          alt="Vimeo"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Vimeo",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384068.png"
          alt="WhatsApp"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "WhatsApp",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384069.png"
          alt="Telegram"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Telegram",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384070.png"
          alt="Messenger"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Messenger",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384071.png"
          alt="Skype"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Skype",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384072.png"
          alt="Spotify"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Spotify",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384073.png"
          alt="SoundCloud"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "SoundCloud",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384074.png"
          alt="Twitch"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Twitch",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384075.png"
          alt="Dribbble"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Dribbble",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384076.png"
          alt="Behance"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Behance",
      href: "#",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384077.png"
          alt="Flickr"
          className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
        />
      ),
      text: "Flickr",
      href: "#",
    },
  ];

  return (
    <SidebarProvider>
      <Sidebar className=" bg-transparent ">
        <SidebarContent className="overflow-y-auto ">
          {/* Main group */}
          <SidebarGroup className="pl-2">
            <SidebarMenu className="space-y-0 border-b-2 border-gray-200 pb-2">
              {(showAllMain ? mainItems : mainItems.slice(0, 6)).map(
                (item, i) => (
                  <SidebarMenuItem className="relative" key={i}>
                    <SidebarMenuButton className="p-0 h-auto w-full hover:bg-transparent transition-colors">
                      <div className="w-full min-h-[64px] relative">
                        <SideBarElement
                          icon={<div className="relative">{item.icon}</div>}
                          href={item.href}
                          text={item.text}
                        />
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
              {!showAllMain && mainItems.length > 6 && (
                <SidebarMenuItem className="relative" key="see-more-main">
                  <SidebarMenuButton
                    className="p-0 h-auto w-full bg-transparent hover:bg-gray-200 rounded-lg transition-colors duration-150"
                    style={{ minHeight: 52, height: 52 }}
                    onClick={() => setShowAllMain(true)}
                  >
                    <div className="w-full min-h-[64px] relative">
                      <SideBarElement
                        icon={
                          <IoIosArrowDown className="w-8 h-8 text-[#0c0c0e ] bg-[#e2e5e9] rounded-full p-1" />
                        }
                        href="#"
                        text="See more"
                      />
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
              {showAllMain && mainItems.length > 6 && (
                <SidebarMenuItem className="relative" key="see-less-main">
                  <SidebarMenuButton
                    className="p-0 h-auto w-full bg-transparent hover:bg-gray-200 rounded-lg transition-colors duration-150"
                    style={{ minHeight: 52, height: 52 }}
                    onClick={() => setShowAllMain(false)}
                  >
                    <div className="w-full min-h-[64px] relative">
                      <SideBarElement
                        icon={
                          <IoIosArrowUp className="w-8 h-8 text-[#0c0c0e ] bg-[#e2e5e9]  rounded-full p-1" />
                        }
                        href="#"
                        text="See less"
                      />
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroup>

          {/* Shortcuts group */}
          <div className="mt-auto p-4 border-t mb-1.5 border-gray-100 bg-transparent">
            <div className="text-md font-semibold text-gray-500 text-left mb-2">
              Your shortcuts
            </div>
          </div>
          <SidebarGroup className="pl-2">
            <SidebarMenu className="space-y-0">
              {(showAllShortcuts
                ? shortcutItems
                : shortcutItems.slice(0, 3)
              ).map((item, i) => (
                <SidebarMenuItem className="relative" key={i}>
                  <SidebarMenuButton className="p-0 h-auto w-full hover:bg-transparent transition-colors">
                    <div className="w-full min-h-[64px] relative">
                      <SideBarElement
                        icon={
                          <div className="relative flex-shrink-0 pl-2 z-10">
                            {item.icon}
                          </div>
                        }
                        href={item.href}
                        text={item.text}
                      />
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {!showAllShortcuts && shortcutItems.length > 3 && (
                <SidebarMenuItem className="relative" key="see-more-shortcuts">
                  <SidebarMenuButton
                    className="p-0 h-auto w-full bg-transparent hover:bg-gray-200 rounded-lg transition-colors duration-150"
                    style={{ minHeight: 52, height: 52 }}
                    onClick={() => setShowAllShortcuts(true)}
                  >
                    <div className="w-full min-h-[64px] relative">
                      <SideBarElement
                        icon={
                          <IoIosArrowDown className="w-8 h-8 text-[#0c0c0e ] bg-[#e2e5e9] rounded-full p-1" />
                        }
                        href="#"
                        text="See more"
                      />
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
              {showAllShortcuts && shortcutItems.length > 3 && (
                <SidebarMenuItem className="relative" key="see-less-shortcuts">
                  <SidebarMenuButton
                    className="p-0 h-auto w-full bg-transparent hover:bg-gray-200 rounded-lg transition-colors duration-150"
                    style={{ minHeight: 52, height: 52 }}
                    onClick={() => setShowAllShortcuts(false)}
                  >
                    <div className="w-full min-h-[64px] relative">
                      <SideBarElement
                        icon={
                          <IoIosArrowUp className="w-8 h-8 text-[#0c0c0e ] bg-[#e2e5e9] rounded-full p-1" />
                        }
                        href="#"
                        text="See less"
                      />
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
