import { Card } from "antd";
import React, { useState } from "react";
import PreviewPublicationModal from "./PreviewPublicationModal";

export default function PostCard({ post, onClick }) {
  const [previewPublicationModal, setPreviewPublicationModal] = useState(false);
  const openPreview = () => {
    setPreviewPublicationModal(true);

    // this.setState({
    //   previewItem: postNumber,
    //   previewPublicationModal: true,
    // });
  };
  return (
    <>
      <PreviewPublicationModal
        open={previewPublicationModal}
        onCancel={() => setPreviewPublicationModal(false)}
        post={post}
      />

      <Card bordered className="card-pubs" onClick={openPreview}>
        <img src={post.imageUrl} width={200} height={200} alt={post.imageUrl} />
      </Card>
    </>
  );
}
