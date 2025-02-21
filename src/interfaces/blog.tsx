/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Blog {
    _id: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    aiContent: string;
    createdAt: string;
    postAuthor: string;
    tags: string[];
    comments: any[] | null;
  }