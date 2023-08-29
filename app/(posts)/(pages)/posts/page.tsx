import {PostsFeed} from "@/app/(posts)/(pages)/posts/components/PostsFeed";
import {Suspense} from "react";

export default function PostsPage() {
    return (
        <div className="flex h-screen">
            <div className="w-screen h-screen flex flex-col space-y-5 justify-start items-center">
                <Suspense fallback={<span>Loading...</span>}>
                    <PostsFeed/>
                </Suspense>
            </div>
        </div>
    );
}