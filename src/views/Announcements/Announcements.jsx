import { PageLayout, SectionLayout } from "../../components/Layout";
import { errorToast } from "../../utilities/errorToast";
import { Line } from "../../components/Layout";
import Announcement from "./Announcement";
import Header from "../../components/Header";
import AnnouncementSkeletons from "../../components/Skeletons/AnnouncementSkeletons";
import { updateAnnouncements } from "../../api/updateAnnouncements";
import { useState, useRef, useCallback } from "react";

const Announcements = ({ announcements, announcementsLoaded, announcementsError, setAnnouncements }) => {
  const [updating, setUpdating] = useState(false);
  const [updatingError, setUpdatingError] = useState(false);
  const lastPostId = announcements.length ? announcements[announcements.length - 1].id : "";
  const endingId = "916126920339509268";
  
  const intObserver = useRef();
  const lastPostRef = useCallback(
    (announcement) => {
      if (updating) return;
      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && lastPostId !== endingId) {
          updateAnnouncements(lastPostId, announcements, setAnnouncements, setUpdating, setUpdatingError);
        }
      });

      if (announcement) intObserver.current.observe(announcement);
    },
    [updating]
  );

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
                announcements.map((e, i) =>
                  i + 1 === announcements.length ? (
                    <Announcement ref={lastPostRef} key={e.id} content={e.content} mentions={e.mentions} author={e.author} timestamp={e.timestamp} reactions={e.reactions} attachments={e.attachments}/>
                  ) : (
                    <Announcement key={e.id} content={e.content} mentions={e.mentions} author={e.author} timestamp={e.timestamp} reactions={e.reactions} attachments={e.attachments}/>
                  )
                )}

              {lastPostId !== endingId ? (
                <p className={`${updating ? "block" : "hidden"} text-blue-600 dark:text-moon-gold mt-7 w-full animate-pulse text-center text-xl lg:text-2xl`}>Loading more announcements...</p>
              ) : (
                <button
                name="Back to the Top"
                  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                  className="mt-10 flex items-center rounded-xl border-[0.5px] border-gray-300 dark:border-gray-100 bg-gradient-to-br from-zinc-100 to-gray-200 px-2 py-1 lg:px-3 shadow-sm font-mono font-semibold hover:scale-105 dark:from-slate-950 dark:to-gray-950 dark:text-gray-100 shadow-blue-400 dark:shadow-indigo-100 lg:text-lg 2xl:text-xl"
                >
                  Back to the top →
                </button>
              )}
            </>
          )}
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Announcements;
