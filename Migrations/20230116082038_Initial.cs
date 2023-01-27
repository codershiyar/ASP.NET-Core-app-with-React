using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WDPRTheaterGroep8.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Artiesten_ArtiestTypes_TypeID",
                table: "Artiesten");

            migrationBuilder.DropForeignKey(
                name: "FK_Voorstellingen_DatumEnTijdRanges_VoorstellingDatumEnTijdID",
                table: "Voorstellingen");

            migrationBuilder.DropForeignKey(
                name: "FK_Voorstellingen_Zalen_VoorstellingZaalID",
                table: "Voorstellingen");

            migrationBuilder.AlterColumn<int>(
                name: "VoorstellingZaalID",
                table: "Voorstellingen",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "VoorstellingDatumEnTijdID",
                table: "Voorstellingen",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<string>(
                name: "Titel",
                table: "Voorstellingen",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<decimal>(
                name: "Prijs",
                table: "Voorstellingen",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<string>(
                name: "Omschrijving",
                table: "Voorstellingen",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddColumn<int>(
                name: "voorstellingID",
                table: "Tickets",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<byte[]>(
                name: "Imagedata",
                table: "AspNetUsers",
                type: "BLOB",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "TypeID",
                table: "Artiesten",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<string>(
                name: "Omschrijving",
                table: "Artiesten",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<string>(
                name: "Naam",
                table: "Artiesten",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<string>(
                name: "Afbeelding",
                table: "Artiesten",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_voorstellingID",
                table: "Tickets",
                column: "voorstellingID");

            migrationBuilder.AddForeignKey(
                name: "FK_Artiesten_ArtiestTypes_TypeID",
                table: "Artiesten",
                column: "TypeID",
                principalTable: "ArtiestTypes",
                principalColumn: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_Voorstellingen_voorstellingID",
                table: "Tickets",
                column: "voorstellingID",
                principalTable: "Voorstellingen",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstellingen_DatumEnTijdRanges_VoorstellingDatumEnTijdID",
                table: "Voorstellingen",
                column: "VoorstellingDatumEnTijdID",
                principalTable: "DatumEnTijdRanges",
                principalColumn: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstellingen_Zalen_VoorstellingZaalID",
                table: "Voorstellingen",
                column: "VoorstellingZaalID",
                principalTable: "Zalen",
                principalColumn: "ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Artiesten_ArtiestTypes_TypeID",
                table: "Artiesten");

            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_Voorstellingen_voorstellingID",
                table: "Tickets");

            migrationBuilder.DropForeignKey(
                name: "FK_Voorstellingen_DatumEnTijdRanges_VoorstellingDatumEnTijdID",
                table: "Voorstellingen");

            migrationBuilder.DropForeignKey(
                name: "FK_Voorstellingen_Zalen_VoorstellingZaalID",
                table: "Voorstellingen");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_voorstellingID",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "voorstellingID",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "Imagedata",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<int>(
                name: "VoorstellingZaalID",
                table: "Voorstellingen",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "VoorstellingDatumEnTijdID",
                table: "Voorstellingen",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Titel",
                table: "Voorstellingen",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "Prijs",
                table: "Voorstellingen",
                type: "TEXT",
                nullable: false,
                defaultValue: 0m,
                oldClrType: typeof(decimal),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Omschrijving",
                table: "Voorstellingen",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "TypeID",
                table: "Artiesten",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Omschrijving",
                table: "Artiesten",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Naam",
                table: "Artiesten",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Afbeelding",
                table: "Artiesten",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Artiesten_ArtiestTypes_TypeID",
                table: "Artiesten",
                column: "TypeID",
                principalTable: "ArtiestTypes",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstellingen_DatumEnTijdRanges_VoorstellingDatumEnTijdID",
                table: "Voorstellingen",
                column: "VoorstellingDatumEnTijdID",
                principalTable: "DatumEnTijdRanges",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstellingen_Zalen_VoorstellingZaalID",
                table: "Voorstellingen",
                column: "VoorstellingZaalID",
                principalTable: "Zalen",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
