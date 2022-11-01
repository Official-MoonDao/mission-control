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

  const intObserver = useRef();
  const lastPostRef = useCallback(
    (announcement) => {
      if (updating) return;
      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
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
                    <Announcement ref={lastPostRef} key={e.id} content={e.content} mentions={e.mentions} author={e.author} timestamp={e.timestamp} reactions={e.reactions} />
                  ) : (
                    <Announcement key={e.id} content={e.content} mentions={e.mentions} author={e.author} timestamp={e.timestamp} reactions={e.reactions} />
                  )
                )}

              <p className={`${updating ? "block" : "hidden"} text-gradient mt-7 w-full animate-pulse text-center text-xl lg:text-2xl`}>Loading more announcements...</p>
            </>
          )}
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Announcements;
