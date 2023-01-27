using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WDPRTheaterGroep8.Migrations
{
    /// <inheritdoc />
    public partial class update4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotaalMislukteInlogpogingen",
                table: "AspNetUsers");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TotaalMislukteInlogpogingen",
                table: "AspNetUsers",
                type: "INTEGER",
                nullable: true);
        }
    }
}
