﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApiPicPay.Contexts;

#nullable disable

namespace WebApiPicPay.Migrations
{
    [DbContext(typeof(PicPayContext))]
    [Migration("20231120171033_BD")]
    partial class BD
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("WebApiPicPay.Domains.Carteira", b =>
                {
                    b.Property<Guid>("IdCarteira")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("IdUsuario")
                        .HasColumnType("uniqueidentifier");

                    b.Property<decimal>("Saldo")
                        .HasColumnType("DECIMAL");

                    b.Property<string>("Titulo")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.HasKey("IdCarteira");

                    b.HasIndex("IdUsuario");

                    b.HasIndex("Titulo")
                        .IsUnique();

                    b.ToTable("Carteira");
                });

            modelBuilder.Entity("WebApiPicPay.Domains.HistoricoDeTransnferencias", b =>
                {
                    b.Property<Guid>("IdHistoricoDeTransnferencias")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("IdHistoricoDeTransnferencias");

                    b.ToTable("HistoricoDeTransnferencias");
                });

            modelBuilder.Entity("WebApiPicPay.Domains.TipoUsuario", b =>
                {
                    b.Property<Guid>("IdTipoUsuario")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Titulo")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.HasKey("IdTipoUsuario");

                    b.ToTable("TipoUsuario");
                });

            modelBuilder.Entity("WebApiPicPay.Domains.Transferencia", b =>
                {
                    b.Property<Guid>("IdTransferencia")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("DataHoraTransferencia")
                        .HasColumnType("DATETIME");

                    b.Property<Guid>("IdCarteiraDestinatário")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("IdCarteiraRemetente")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("IdHistoricoDeTransferencias")
                        .HasColumnType("uniqueidentifier");

                    b.Property<decimal>("ValorASerTransferido")
                        .HasColumnType("DECIMAL");

                    b.HasKey("IdTransferencia");

                    b.HasIndex("IdCarteiraDestinatário");

                    b.HasIndex("IdCarteiraRemetente");

                    b.HasIndex("IdHistoricoDeTransferencias");

                    b.ToTable("Transferencia");
                });

            modelBuilder.Entity("WebApiPicPay.Domains.Usuario", b =>
                {
                    b.Property<Guid>("IdUsuario")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("CNPJ")
                        .IsRequired()
                        .HasColumnType("CHAR(14)");

                    b.Property<string>("CPF")
                        .IsRequired()
                        .HasColumnType("CHAR(11)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.Property<Guid>("IdTipoUsuario")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasMaxLength(60)
                        .HasColumnType("VARCHAR(60)");

                    b.HasKey("IdUsuario");

                    b.HasIndex("CNPJ")
                        .IsUnique();

                    b.HasIndex("CPF")
                        .IsUnique();

                    b.HasIndex("Email")
                        .IsUnique();

                    b.HasIndex("IdTipoUsuario");

                    b.ToTable("Usuario");
                });

            modelBuilder.Entity("WebApiPicPay.Domains.Carteira", b =>
                {
                    b.HasOne("WebApiPicPay.Domains.Usuario", "Usuario")
                        .WithMany()
                        .HasForeignKey("IdUsuario")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("WebApiPicPay.Domains.Transferencia", b =>
                {
                    b.HasOne("WebApiPicPay.Domains.Carteira", "CarteiraDestinatario")
                        .WithMany()
                        .HasForeignKey("IdCarteiraDestinatário")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebApiPicPay.Domains.Carteira", "CarteiraRemetente")
                        .WithMany()
                        .HasForeignKey("IdCarteiraRemetente")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebApiPicPay.Domains.HistoricoDeTransnferencias", "HistoricoDeTransnferencias")
                        .WithMany()
                        .HasForeignKey("IdHistoricoDeTransferencias")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CarteiraDestinatario");

                    b.Navigation("CarteiraRemetente");

                    b.Navigation("HistoricoDeTransnferencias");
                });

            modelBuilder.Entity("WebApiPicPay.Domains.Usuario", b =>
                {
                    b.HasOne("WebApiPicPay.Domains.TipoUsuario", "TipoUsuario")
                        .WithMany()
                        .HasForeignKey("IdTipoUsuario")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("TipoUsuario");
                });
#pragma warning restore 612, 618
        }
    }
}