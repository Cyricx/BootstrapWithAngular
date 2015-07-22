using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace BootstrapWithAngular
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                    "~/Scripts/angular.js",
                    "~/Scripts/angular-resource.js",
                    "~/Scripts/angular-route.js",
                    "~/Scripts/Application/MainApp.js",
                    "~/Scripts/Application/Modules/Tickets/TicketApp.js",
                    "~/Scripts/Application/Modules/Tickets/TicketController.js",
                    "~/Scripts/Application/Modules/Tickets/TicketService.js",
                    "~/Scripts/Application/Modules/Tickets/ManageTicketController.js",
                    "~/Scripts/Application/Modules/TicketCategories/TicketCategoryApp.js",
                    "~/Scripts/Application/Modules/TicketCategories/TicketCategoryService.js"
                ));
        }
    }
}