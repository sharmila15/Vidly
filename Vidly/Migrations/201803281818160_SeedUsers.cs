namespace Vidly.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SeedUsers : DbMigration
    {
        public override void Up()
        {
            Sql(@"
INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'06dfc8ac-73ee-4e34-be9e-c825ea1a4f58', N'admin@gmail.com', 0, N'AFkixxjK8+nrFDiBEUVmd1qZ0ElXhOK5iQgMq3RHickcSa0GQWYuDmzaP08kl+gHSg==', N'19129df2-cac9-4d24-84e9-a8b40e5f0053', NULL, 0, 0, NULL, 1, 0, N'admin@gmail.com')
INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'7c03b2fa-e9da-42c2-bbab-16824b035e6f', N'guest@gmail.com', 0, N'AEuI1vRrKU9LhN5gL++fiw1ayCQ20oGtwGHv1f6Mm3VeII45o2MZKknG/ZSNLI/2sg==', N'5f4470fd-715a-45ee-8b93-6f6ea9eb964f', NULL, 0, 0, NULL, 1, 0, N'guest@gmail.com')


INSERT INTO [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'be02a895-b066-4379-ab61-afb1b0b548fb', N'CanManageMovies')

INSERT INTO [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'06dfc8ac-73ee-4e34-be9e-c825ea1a4f58', N'be02a895-b066-4379-ab61-afb1b0b548fb')
");
        }
        
        public override void Down()
        {
        }
    }
}
