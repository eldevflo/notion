import { OutputBlockData } from "@editorjs/editorjs";

export type Note = {
  id: number;
  userId: number;
  block_id: string;
  blocks: OutputBlockData[];
};
