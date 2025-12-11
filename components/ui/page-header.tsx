"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PageHeaderProps {
    breadcrumb: string;
    title: string;
    subtitle?: string;
    userName?: string;
    userId?: string;
    showProfileLink?: boolean;
}

// Map breadcrumb segment names to their corresponding route paths
const segmentToRoute: Record<string, string> = {
    "Home": "dashboard",
    "Dashboard": "dashboard",
    "Timetable": "timetable",
    "Finance": "finance",
    "Exams": "exams",
    "Leaves": "leaves",
    "Notices": "notices",
    "Performance": "performance",
    "Profile": "profile",
    "Reports": "reports",
    "Resources": "resources",
    "Attendance": "attendance",
    "Students": "students",
    "Staff": "staff",
    "Analytics": "analytics",
    "Classes": "classes",
    "Events": "events",
    "Settings": "settings",
    "Subjects": "subjects",
    "Marks": "marks",
    "Grades": "grades",
    "Fee Management": "finance",
    "Class Timetable": "timetable",
};

export function PageHeader({
    breadcrumb,
    title,
    subtitle,
    userName,
    userId,
    showProfileLink = false,
}: PageHeaderProps) {
    const pathname = usePathname();

    // Extract the role from the current path (e.g., /student/timetable -> student)
    const pathParts = pathname.split('/').filter(Boolean);
    const role = pathParts[0] || 'student'; // Default to student if not found

    // Parse breadcrumb segments
    const segments = breadcrumb.split(' / ').map(s => s.trim());

    // Generate links for each segment
    const generateLink = (segment: string): string => {
        const route = segmentToRoute[segment];
        if (route) {
            return `/${role}/${route}`;
        }
        // Fallback: convert segment to lowercase and use as route
        return `/${role}/${segment.toLowerCase().replace(/\s+/g, '-')}`;
    };

    return (
        <div className="space-y-1">
            {/* Breadcrumb */}
            <nav className="text-sm text-slate-500 flex items-center gap-1">
                {segments.map((segment, index) => {
                    const isLast = index === segments.length - 1;

                    return (
                        <span key={index} className="flex items-center">
                            {index > 0 && <span className="mx-1">/</span>}
                            {isLast ? (
                                <span className="text-slate-600 font-medium">{segment}</span>
                            ) : (
                                <Link
                                    href={generateLink(segment)}
                                    className="hover:text-orange-500 hover:underline transition-colors cursor-pointer"
                                >
                                    {segment}
                                </Link>
                            )}
                        </span>
                    );
                })}
            </nav>

            {/* Title */}
            <h1 className="text-lg sm:text-2xl font-bold">
                <span className="text-orange-500">{title}</span>
                {userName && (
                    <span className="text-blue-600">
                        {" "}| {userName}
                        {userId && <span className="text-sm sm:text-2xl">({userId})</span>}
                    </span>
                )}
            </h1>

            {/* Subtitle or Profile Link */}
            {subtitle && (
                <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}

            {showProfileLink && (
                <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0 h-auto text-sm">
                    Public Profile <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
            )}
        </div>
    );
}
