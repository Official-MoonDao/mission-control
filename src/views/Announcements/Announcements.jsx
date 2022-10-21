import { PageLayout, SectionLayout } from "../../components/Layout";
import { errorToast } from "../../hooks&utils/errorToast";
import { Line } from "../../components/Layout";
import Announcement from "./Announcement";
import Header from "../../components/Header";
import AnnouncementSkeletons from "../../components/Skeletons/AnnouncementSkeletons";

const Announcements = ({ announcements, announcementsLoaded, announcementsError }) => {
  if (announcementsError) errorToast("Connection with Discord failed. Contact MoonDAO if the problem persists 🚀");

  return (
    <PageLayout>
      <SectionLayout>
        <Header text={"Announcements"} />
        <Line />

        <div className="mt-[34px]">
          {!announcementsLoaded || announcementsError ? (
            <AnnouncementSkeletons />
          ) : (
            announcements.map((e) => <Announcement key={e.id} content={e.content} mentions={e.mentions} author={e.author} timestamp={e.timestamp} reactions={e.reactions} />)
          )}
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Announcements;
