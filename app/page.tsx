import Link from "next/link";
import {
  GraduationCap,
  ShieldCheck,
  Users,
  BookOpen,
  Calendar,
  BarChart3,
  Bell,
  CreditCard,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "Academic Management",
      description: "Complete curriculum planning, assignments, and grade tracking in one place."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated timetable generation with conflict detection and room allocation."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards for attendance, performance, and financial insights."
    },
    {
      icon: Bell,
      title: "Instant Notifications",
      description: "Keep everyone informed with automated alerts for events and announcements."
    },
    {
      icon: CreditCard,
      title: "Fee Management",
      description: "Streamlined fee collection, invoicing, and payment tracking system."
    },
    {
      icon: Clock,
      title: "Attendance Tracking",
      description: "Digital attendance with biometric integration and parent notifications."
    }
  ];

  const stats = [
    { value: "10K+", label: "Students Managed" },
    { value: "500+", label: "Faculty Members" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" }
  ];

  const roles = [
    {
      role: "admin",
      title: "Administrator",
      description: "Complete control over school operations, staff management, and system configuration.",
      icon: ShieldCheck,
      color: "blue",
      features: ["User Management", "Financial Reports", "System Settings", "Analytics Dashboard"]
    },
    {
      role: "faculty",
      title: "Faculty Portal",
      description: "Manage classes, attendance, grades, and communicate with students efficiently.",
      icon: Users,
      color: "emerald",
      features: ["Class Management", "Grade Entry", "Attendance", "Leave Requests"]
    },
    {
      role: "student",
      title: "Student Portal",
      description: "Access your academic records, timetable, exam results, and fee status.",
      icon: GraduationCap,
      color: "violet",
      features: ["View Grades", "Class Schedule", "Fee Payment", "Resources"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-orange-500 to-rose-500 p-2 rounded-xl">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                SchoolSync
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Features</a>
              <a href="#portals" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Portals</a>
              <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/auth/login/student"
                className="hidden sm:inline-flex text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="#portals"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-rose-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-violet-400/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Modern School Management System
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
            Transform Your School with
            <span className="block bg-gradient-to-r from-orange-600 via-rose-500 to-violet-600 bg-clip-text text-transparent">
              SchoolSync ERP
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10">
            A comprehensive, cloud-based school management platform that streamlines
            administration, enhances learning, and connects students, faculty, and parents seamlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#portals"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              Access Portal
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-full text-lg font-semibold border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-5xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Everything You Need to Run a Modern School
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Powerful features designed to simplify school administration and enhance the learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-orange-100 to-rose-100 dark:from-orange-900/30 dark:to-rose-900/30 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section id="portals" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Choose Your Portal
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Access the system through your designated portal with role-specific features and dashboards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roles.map((item) => {
              const colorClasses = {
                blue: {
                  bg: "from-blue-500 to-blue-600",
                  light: "bg-blue-100 dark:bg-blue-900/30",
                  text: "text-blue-600 dark:text-blue-400",
                  border: "hover:border-blue-500",
                  shadow: "hover:shadow-blue-500/20"
                },
                emerald: {
                  bg: "from-emerald-500 to-emerald-600",
                  light: "bg-emerald-100 dark:bg-emerald-900/30",
                  text: "text-emerald-600 dark:text-emerald-400",
                  border: "hover:border-emerald-500",
                  shadow: "hover:shadow-emerald-500/20"
                },
                violet: {
                  bg: "from-violet-500 to-violet-600",
                  light: "bg-violet-100 dark:bg-violet-900/30",
                  text: "text-violet-600 dark:text-violet-400",
                  border: "hover:border-violet-500",
                  shadow: "hover:shadow-violet-500/20"
                }
              };
              const colors = colorClasses[item.color as keyof typeof colorClasses];

              return (
                <Link
                  key={item.role}
                  href={`/auth/login/${item.role}`}
                  className={`group relative bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${colors.border} ${colors.shadow}`}
                >
                  {/* Gradient top bar */}
                  <div className={`h-2 bg-gradient-to-r ${colors.bg}`} />

                  <div className="p-8">
                    <div className={`${colors.light} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`h-10 w-10 ${colors.text}`} />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      {item.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className={`h-5 w-5 ${colors.text} flex-shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className={`inline-flex items-center gap-2 font-semibold ${colors.text} group-hover:gap-4 transition-all duration-300`}>
                      Access Portal
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-orange-500 via-rose-500 to-violet-500 rounded-3xl p-8 sm:p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Transform Your School?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
                Join thousands of schools already using SchoolSync to streamline their operations.
              </p>
              <Link
                href="/auth/login/admin"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Get Started Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-rose-500 p-2 rounded-xl">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">SchoolSync</span>
              </div>
              <p className="text-slate-400 mb-8 max-w-md">
                A modern, comprehensive school management system designed to transform
                educational institutions with cutting-edge technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-400">
                  <Building2 className="h-5 w-5 text-orange-500" />
                  <span>123 Education Street, New Delhi, India</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <span>contact@schoolsync.edu</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <span>Available 24/7 for Support</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-3 text-slate-400">
                  <li><a href="#features" className="hover:text-orange-400 transition-colors">Features</a></li>
                  <li><a href="#portals" className="hover:text-orange-400 transition-colors">Portals</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Support</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-3 text-slate-400">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Cookie Policy</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">GDPR</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
            <p>© 2024 SchoolSync. All rights reserved. Built with ❤️ for modern education.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
