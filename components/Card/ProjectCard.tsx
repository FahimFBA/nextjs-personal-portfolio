import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IProjectData } from "@/types/interface";
import Image from "next/image";
import { LuGithub, LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";

const ProjectCard: React.FC<IProjectData> = ({
  deployment,
  description,
  github,
  mainImage,
  title,
}) => {
  return (
    <Card className="cursor-pointer">
      <Image
        src={mainImage}
        alt="alt text"
        width={400}
        height={400}
        className="w-full h-[200px] object-cover rounded-t-md"
      />
      <CardHeader className="px-4 py-2">
        <CardTitle className="text-md">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="">
          {github && (
            <Link href={github} target="_blank">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground px-2 py-0"
              >
                <LuGithub className="cursor-pointer w-6 h-6" />
              </Button>
            </Link>
          )}
          {deployment && (
            <Link href={deployment} target="_blank">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground px-2 py-0"
              >
                <LuArrowUpRight className="cursor-pointer w-6 h-6" />
              </Button>
            </Link>
          )}
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
