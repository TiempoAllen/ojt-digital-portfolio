import React from "react";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import Documentation from "@/model/documentation";

const DocumentationModal: React.FC<{ documentation: Documentation }> = ({
  documentation,
}) => {
  return (
    <AlertDialogContent>
      <div className="relative mb-4 break-inside-avoid rounded-lg overflow-hidden">
        <Image
          src={`/screenshots/${documentation.image}.png`}
          alt={documentation.title}
          width={350}
          height={350}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
      {/* <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter> */}
    </AlertDialogContent>
  );
};

export default DocumentationModal;
