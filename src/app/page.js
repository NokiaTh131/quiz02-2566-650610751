"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";

// let USER = [
//   {
//     userImagePath: "/profileImages/lisa.jpg",
//     username: "Lisa",
//     commentText: "จริงค่า",
//     likeNum: "999",
//   },
//   {
//     userImagePath: "/profileImages/charliebrown.jpg",
//     username: "Charlie Brown",
//     commentText: "Crazyyy!!",
//     likeNum: "0",
//   },
// ];

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner
          firstname="Jakkapong"
          lastname="Jinasen"
          id="650610751"
          image="/profileImages/roob.jpg"
          post="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          like="100"
        />

        {/* Comment Example */}
        {/* <Comment
          userImagePath={"/profileImages/lisa.jpg"}
          username={"Lisa"}
          commentText={"จริงค่า"}
          likeNum={"999"}
        /> */}

        {/* Reply Example */}
        {/* <Reply
          userImagePath={"/profileImages/puppy.jpg"}
          username={"หมาน้อย"}
          replyText={"จริงค้าบบบบบบบบ"}
          likeNum={"2"}
        /> */}

        {/* map-loop render Comment component here */}
        {comments.map((user) => (
          <Comment
            key={user.userImagePath}
            userImagePath={user.userImagePath}
            username={user.username}
            commentText={user.commentText}
            likeNum={user.likeNum}
            replies={user.replies}
          />
        ))}
      </div>
    </div>
  );
}
