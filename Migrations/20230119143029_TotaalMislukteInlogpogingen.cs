using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WDPRTheaterGroep8.Migrations
{
    /// <inheritdoc />
    public partial class TotaalMislukteInlogpogingen : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TotaalMislukteInlogpogingen",
                table: "AspNetUsers",
                type: "INTEGER",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotaalMislukteInlogpogingen",
                table: "AspNetUsers");
        }
    }
}
