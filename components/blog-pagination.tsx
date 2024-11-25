"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function BlogPagination({
  currentPage,
  totalPages,
}: BlogPaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-4">
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => {
          if (currentPage > 1) {
            window.location.href = `/blog?page=${currentPage - 1}`;
          }
        }}
      >
        <ChevronLeft className="w-4 h-4 mr-2" /> Previous
      </Button>
      <span className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => {
          if (currentPage < totalPages) {
            window.location.href = `/blog?page=${currentPage + 1}`;
          }
        }}
      >
        Next <ChevronRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
