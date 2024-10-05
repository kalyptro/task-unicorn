"use client"
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { trpc } from '@/utils/trpc';

type P = {
  entityId: string;
}

const HeartToggleButton = ({ entityId }: P) => {
  const [liked, setLiked] = useState(false);

  const { data: isLikedData } = trpc.getIsLiked.useQuery({ entityId });
  useEffect(() => {
    if (isLikedData) {
      setLiked(isLikedData);
    }
  }, [isLikedData]);


  const toggleLike = trpc.toggleLike.useMutation();

  const handleLikeToggle = async () => {
    try {
      const result = await toggleLike.mutateAsync({ entityId, liked: !liked });
      setLiked(result.liked);
    } catch (error) {
      console.error("Failed to toggle like:", error);
    }
  };

  return (
    <Button onClick={handleLikeToggle} icon={liked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />} />
  );
};

export default HeartToggleButton;