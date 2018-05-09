using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Vidly
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapMvcAttributeRoutes();

            //routes.MapRoute(
            //     "MoviesByReleaseDate",
            //     "movies/released/{year}/{month}",
            //    new { controller = "Movies", action = "ByReleaseDate"},
            //    new { year = @"2015|2016", month = @"\d{2}" }
            //);

            routes.MapRoute(
                 "MoviesIndexList",
                 "Movies/Index",
                new { controller = "Movies", action = "Index" }

            );

            routes.MapRoute(
                 "MoviesList",
                 "Movies/Random",
                new { controller = "Movies", action = "Random" }

            );

            routes.MapRoute(
                 "CustomersList",
                 "Customer/Index",
                new { controller = "Customer", action = "Index" }
               
            );

            routes.MapRoute(
                 "CustomersDetails",
                 "Customer/Details/{id}",
                new { controller = "Customer", action = "Details", id = UrlParameter.Optional }

            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
