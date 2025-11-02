import React from "react";
import ReactPlayer from "react-player";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoPlayerProps {
  url: string;
}

export default function VideoPlayer({ url }: VideoPlayerProps) {
  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4 relative z-0">
      <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden border border-gray-500/30 shadow-lg">
        <ReactPlayer src={url} width="100%" height="100%" controls light playing={false} />
      </AspectRatio>
    </div>
  );
}
