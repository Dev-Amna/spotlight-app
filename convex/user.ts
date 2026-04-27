import { mutation } from "./_generated/server"
import { v } from "convex/values"

export const createUser = mutation({
    args: {
        username: v.string(),
        fullname: v.string(),
        email: v.string(),
        bio: v.optional(v.string()),
        image: v.string(),
        follower: v.number(),
        following: v.number(),
        posts: v.number(),
        clerkId: v.string()
    },


    handler: async (ctx, args) => {
        const exitingUser = await ctx.db.query("users")
            .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId));
        if (exitingUser) return;

        await ctx.db.insert("users", {
            username: args.username,
            fullname: args.fullname,
            email: args.email,
            bio: args.bio,
            image: args.image,
            clerkId: args.clerkId,
            follower: 0,
            following: 0,
            posts: 0,
        })


    }
})