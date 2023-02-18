import { PageLayout } from "@/components/layout/PageLayout";
import {
  UploadRouteFormSection,
  UploadRouteHeaderSection,
} from "@/components/pages/routes/upload/upload-route-page";

const UploadRoutePage = () => {
  return (
    <PageLayout title="Upload new route">
      <UploadRouteHeaderSection />
      <UploadRouteFormSection />
    </PageLayout>
  );
};

export default UploadRoutePage;
