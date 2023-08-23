import {Filter} from "@/app/(posts)/modules/filter/components/Filter";
import {PostsFeed} from "@/app/(posts)/(pages)/posts/components/PostsFeed";

export default function PostsPage() {
    return (
        <div className="flex h-screen">
            <div className="w-screen h-screen flex flex-col space-y-5 justify-start items-center">
                <Filter/>
                <PostsFeed/>
            </div>
        </div>
    );
}