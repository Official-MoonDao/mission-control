import { PageLayout, SectionLayout } from "../../components/Layout";
import { errorToast } from "../../utilities/errorToast";
import { Line } from "../../components/Layout";
import Announcement from "./Announcement";
import Header from "../../components/Header";
import AnnouncementSkeletons from "../../components/Skeletons/AnnouncementSkeletons";
import { updateAnnouncements } from "../../api/updateAnnouncements";
import { useState } from "react";

const Announcements = ({ announcements, announcementsLoaded, announcementsError, setAnnouncements }) => {
  const [updating, setUpdating] = useState(false);
  const [updatingError, setUpdatingError] = useState(false);
  const lastPostId = announcements.length ? announcements[announcements.length - 1].id : "";
  if (announcementsError || updatingError) errorToast("Connection with Discord failed. Contact MoonDAO if the problem persists 🚀");

  return (
    <PageLayout>
      <SectionLayout>
        <Header text={"Announcements"} />
        <Line />

        <div className="mt-[34px]">
          {!announcementsLoaded || announcementsError ? (
            <AnnouncementSkeletons />
          ) : (
            <>
              {announcements.length &&
                announcements.map((e) => <Announcement key={e.id} content={e.content} mentions={e.mentions} author={e.author} timestamp={e.timestamp} reactions={e.reactions} />)}

              <div className=" mt-8 flex items-center justify-between">
                <button
                  name="More Announcements"
                  disabled={updating}
                  className="flex items-center rounded border-[0.5px] border-gray-300 bg-gradient-to-br from-blue-400 to-emerald-300 px-2 py-1 font-semibold capitalize text-slate-900 shadow hover:scale-105 disabled:animate-pulse disabled:cursor-wait disabled:opacity-30 dark:from-moon-pink dark:to-slate-800 dark:text-gray-100 lg:px-4 lg:py-3 lg:text-lg 2xl:text-xl"
                  onClick={() => updateAnnouncements(lastPostId, announcements, setAnnouncements, setUpdating, setUpdatingError)}
                >
                  {updating ? "Loading..." : "More announcements"}
                </button>

                <button
                  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                  className="bg-gradient-to-r from-moon-orange to-moon-pink bg-clip-text font-semibold text-transparent hover:scale-105 dark:from-moon-pink dark:to-moon-gold lg:text-lg 2xl:text-xl"
                >
                  Back to the top→
                </button>
              </div>
              
            </>
          )}
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Announcements;
