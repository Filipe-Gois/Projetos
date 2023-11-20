using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApiPicPay.Migrations
{
    /// <inheritdoc />
    public partial class BD : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "HistoricoDeTransnferencias",
                columns: table => new
                {
                    IdHistoricoDeTransnferencias = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HistoricoDeTransnferencias", x => x.IdHistoricoDeTransnferencias);
                });

            migrationBuilder.CreateTable(
                name: "TipoUsuario",
                columns: table => new
                {
                    IdTipoUsuario = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Titulo = table.Column<string>(type: "VARCHAR(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TipoUsuario", x => x.IdTipoUsuario);
                });

            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    IdUsuario = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdTipoUsuario = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Nome = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    CPF = table.Column<string>(type: "CHAR(11)", nullable: false),
                    CNPJ = table.Column<string>(type: "CHAR(14)", nullable: false),
                    Email = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    Senha = table.Column<string>(type: "VARCHAR(60)", maxLength: 60, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.IdUsuario);
                    table.ForeignKey(
                        name: "FK_Usuario_TipoUsuario_IdTipoUsuario",
                        column: x => x.IdTipoUsuario,
                        principalTable: "TipoUsuario",
                        principalColumn: "IdTipoUsuario",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Carteira",
                columns: table => new
                {
                    IdCarteira = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdUsuario = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Saldo = table.Column<decimal>(type: "DECIMAL(18,0)", nullable: false),
                    Titulo = table.Column<string>(type: "VARCHAR(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Carteira", x => x.IdCarteira);
                    table.ForeignKey(
                        name: "FK_Carteira_Usuario_IdUsuario",
                        column: x => x.IdUsuario,
                        principalTable: "Usuario",
                        principalColumn: "IdUsuario",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Transferencia",
                columns: table => new
                {
                    IdTransferencia = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdCarteiraRemetente = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdHistoricoDeTransferencias = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DataHoraTransferencia = table.Column<DateTime>(type: "DATETIME", nullable: false),
                    IdCarteiraDestinatário = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ValorASerTransferido = table.Column<decimal>(type: "DECIMAL(18,0)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transferencia", x => x.IdTransferencia);
                    table.ForeignKey(
                        name: "FK_Transferencia_Carteira_IdCarteiraDestinatário",
                        column: x => x.IdCarteiraDestinatário,
                        principalTable: "Carteira",
                        principalColumn: "IdCarteira",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Transferencia_Carteira_IdCarteiraRemetente",
                        column: x => x.IdCarteiraRemetente,
                        principalTable: "Carteira",
                        principalColumn: "IdCarteira",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_Transferencia_HistoricoDeTransnferencias_IdHistoricoDeTransferencias",
                        column: x => x.IdHistoricoDeTransferencias,
                        principalTable: "HistoricoDeTransnferencias",
                        principalColumn: "IdHistoricoDeTransnferencias",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Carteira_IdUsuario",
                table: "Carteira",
                column: "IdUsuario");

            migrationBuilder.CreateIndex(
                name: "IX_Carteira_Titulo",
                table: "Carteira",
                column: "Titulo",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Transferencia_IdCarteiraDestinatário",
                table: "Transferencia",
                column: "IdCarteiraDestinatário");

            migrationBuilder.CreateIndex(
                name: "IX_Transferencia_IdCarteiraRemetente",
                table: "Transferencia",
                column: "IdCarteiraRemetente");

            migrationBuilder.CreateIndex(
                name: "IX_Transferencia_IdHistoricoDeTransferencias",
                table: "Transferencia",
                column: "IdHistoricoDeTransferencias");

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_CNPJ",
                table: "Usuario",
                column: "CNPJ",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_CPF",
                table: "Usuario",
                column: "CPF",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_Email",
                table: "Usuario",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_IdTipoUsuario",
                table: "Usuario",
                column: "IdTipoUsuario");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Transferencia");

            migrationBuilder.DropTable(
                name: "Carteira");

            migrationBuilder.DropTable(
                name: "HistoricoDeTransnferencias");

            migrationBuilder.DropTable(
                name: "Usuario");

            migrationBuilder.DropTable(
                name: "TipoUsuario");
        }
    }
}
