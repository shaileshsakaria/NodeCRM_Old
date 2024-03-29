USE [master]
GO
/****** Object:  Database [NodeCRM]    Script Date: 6/24/2016 8:05:54 PM ******/
CREATE DATABASE [NodeCRM]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'NodeCRM', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQL2014EXP\MSSQL\DATA\NodeCRM.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'NodeCRM_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQL2014EXP\MSSQL\DATA\NodeCRM_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [NodeCRM].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [NodeCRM] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [NodeCRM] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [NodeCRM] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [NodeCRM] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [NodeCRM] SET ARITHABORT OFF 
GO
ALTER DATABASE [NodeCRM] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [NodeCRM] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [NodeCRM] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [NodeCRM] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [NodeCRM] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [NodeCRM] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [NodeCRM] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [NodeCRM] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [NodeCRM] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [NodeCRM] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [NodeCRM] SET  DISABLE_BROKER 
GO
ALTER DATABASE [NodeCRM] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [NodeCRM] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [NodeCRM] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [NodeCRM] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [NodeCRM] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [NodeCRM] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [NodeCRM] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [NodeCRM] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [NodeCRM] SET  MULTI_USER 
GO
ALTER DATABASE [NodeCRM] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [NodeCRM] SET DB_CHAINING OFF 
GO
ALTER DATABASE [NodeCRM] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [NodeCRM] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
USE [NodeCRM]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 6/24/2016 8:05:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Customer](
	[CustomerID] [bigint] IDENTITY(1,1) NOT NULL,
	[CreatedOn] [datetime] NULL,
	[BusinessName] [varchar](256) NULL,
	[NoOfPrincipals] [int] NULL,
	[KeyPrincipal] [varchar](256) NULL,
	[Occupation] [varchar](256) NULL,
	[Type] [varchar](256) NULL,
	[CRN] [bigint] NULL,
	[DateOfApplication] [datetime] NULL,
	[Channel] [varchar](50) NULL,
	[IsIDUploaded] [varchar](5) NULL,
	[State] [varchar](50) NULL,
	[VerifiedChannel] [varchar](100) NULL,
	[VerifiedBy] [varchar](256) NULL,
	[Telephone] [varchar](15) NULL,
	[EmailAddress] [varchar](100) NULL,
	[Mobile] [varchar](15) NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[CustomerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[UserManagement]    Script Date: 6/24/2016 8:05:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[UserManagement](
	[UserID] [bigint] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](25) NULL,
	[Email] [varchar](100) NULL,
	[Password] [varchar](500) NULL,
	[FirstName] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[LastLoginDate] [datetime] NULL,
	[AccessToken] [varchar](500) NULL,
 CONSTRAINT [PK_UserManagement] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[UserPreferences]    Script Date: 6/24/2016 8:05:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[UserPreferences](
	[ID] [bigint] IDENTITY(1,1) NOT NULL,
	[UserID] [bigint] NULL,
	[PreferenceType] [varchar](10) NULL,
	[PageName] [varchar](50) NULL,
	[ColumnName] [varchar](50) NULL,
	[PrferenceOrder] [int] NULL,
	[SortDirection] [varchar](10) NULL,
	[IsHide] [bit] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifedOn] [datetime] NULL,
 CONSTRAINT [PK_UserPreferences] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[Customer] ON 

INSERT [dbo].[Customer] ([CustomerID], [CreatedOn], [BusinessName], [NoOfPrincipals], [KeyPrincipal], [Occupation], [Type], [CRN], [DateOfApplication], [Channel], [IsIDUploaded], [State], [VerifiedChannel], [VerifiedBy], [Telephone], [EmailAddress], [Mobile]) VALUES (1, CAST(0x0000A62C00C042C0 AS DateTime), N'Above Technology Ltd', 1, N'John Smith', N'Director', N'Private Company Limited by shares', 9032327, CAST(0x0000A61800000000 AS DateTime), N'Web', N'Yes', N'Yes', N'Not verified', NULL, NULL, NULL, NULL)
INSERT [dbo].[Customer] ([CustomerID], [CreatedOn], [BusinessName], [NoOfPrincipals], [KeyPrincipal], [Occupation], [Type], [CRN], [DateOfApplication], [Channel], [IsIDUploaded], [State], [VerifiedChannel], [VerifiedBy], [Telephone], [EmailAddress], [Mobile]) VALUES (2, CAST(0x0000A62C00C5C100 AS DateTime), N'law Partners', 9, N'Rose Watts', N'Accountant', N'Private Company Limited by Guarantee', 1032326, CAST(0x0000A61800000000 AS DateTime), N'Branch', N'Yes', N'No', N'Manual', N'priyank.dash', NULL, NULL, NULL)
INSERT [dbo].[Customer] ([CustomerID], [CreatedOn], [BusinessName], [NoOfPrincipals], [KeyPrincipal], [Occupation], [Type], [CRN], [DateOfApplication], [Channel], [IsIDUploaded], [State], [VerifiedChannel], [VerifiedBy], [Telephone], [EmailAddress], [Mobile]) VALUES (3, CAST(0x0000A62C00000000 AS DateTime), N'Top Retail', 2, N'Joan Collins', N'Managing director', N'Subsidiary of a Listed Company', 9066326, CAST(0x0000A61800000000 AS DateTime), N'Web', N'Yes', N'Yes', N'Onfido', NULL, NULL, NULL, NULL)
INSERT [dbo].[Customer] ([CustomerID], [CreatedOn], [BusinessName], [NoOfPrincipals], [KeyPrincipal], [Occupation], [Type], [CRN], [DateOfApplication], [Channel], [IsIDUploaded], [State], [VerifiedChannel], [VerifiedBy], [Telephone], [EmailAddress], [Mobile]) VALUES (4, CAST(0x0000A62C00000000 AS DateTime), N'Pay Mobile', 2, N'Ian Johnson', N'Finance director', N'Subsidiary of a Regulated Financial Institution', 9067726, CAST(0x0000A61800000000 AS DateTime), N'Phone', N'Yes', N'Archived', N'Manual', N'lisa.sterling', NULL, NULL, NULL)
INSERT [dbo].[Customer] ([CustomerID], [CreatedOn], [BusinessName], [NoOfPrincipals], [KeyPrincipal], [Occupation], [Type], [CRN], [DateOfApplication], [Channel], [IsIDUploaded], [State], [VerifiedChannel], [VerifiedBy], [Telephone], [EmailAddress], [Mobile]) VALUES (5, CAST(0x0000A62C00000000 AS DateTime), N'FX Money Ltd', 37, N'Antonio Betty', N'Director', N'Regulated EU or Equivalent Country Financial Services Firms', 1168826, CAST(0x0000A61800000000 AS DateTime), N'Web', N'No', N'Incomplete', N'Not verified', NULL, NULL, NULL, NULL)
INSERT [dbo].[Customer] ([CustomerID], [CreatedOn], [BusinessName], [NoOfPrincipals], [KeyPrincipal], [Occupation], [Type], [CRN], [DateOfApplication], [Channel], [IsIDUploaded], [State], [VerifiedChannel], [VerifiedBy], [Telephone], [EmailAddress], [Mobile]) VALUES (6, CAST(0x0000A62C00000000 AS DateTime), N'Top Retail', 3, N'Derek Slattery', N'Director', N'Subsidiary of a Listed Company', 1249665, CAST(0x0000A61800000000 AS DateTime), N'Web', N'Yes', N'Limited', N'Manual', NULL, NULL, NULL, NULL)
INSERT [dbo].[Customer] ([CustomerID], [CreatedOn], [BusinessName], [NoOfPrincipals], [KeyPrincipal], [Occupation], [Type], [CRN], [DateOfApplication], [Channel], [IsIDUploaded], [State], [VerifiedChannel], [VerifiedBy], [Telephone], [EmailAddress], [Mobile]) VALUES (7, CAST(0x0000A62C00000000 AS DateTime), N'Pay Mobile', 4, N'Doug Fedex', N'Manager', N'Regulated EU or Equivalent Country Financial Services Firms', 6476973, CAST(0x0000A61800000000 AS DateTime), N'Phone', N'No', N'Pending', N'Manual', NULL, NULL, NULL, NULL)
INSERT [dbo].[Customer] ([CustomerID], [CreatedOn], [BusinessName], [NoOfPrincipals], [KeyPrincipal], [Occupation], [Type], [CRN], [DateOfApplication], [Channel], [IsIDUploaded], [State], [VerifiedChannel], [VerifiedBy], [Telephone], [EmailAddress], [Mobile]) VALUES (8, CAST(0x0000A60E00000000 AS DateTime), N'law Partners', 5, N'Kevin', N'Manager', N'Subsidiary of a Regulated Financial Institution', 7969194, CAST(0x0000A61800000000 AS DateTime), N'Web', N'No', N'Rejected', N'Not verified', NULL, NULL, NULL, NULL)
INSERT [dbo].[Customer] ([CustomerID], [CreatedOn], [BusinessName], [NoOfPrincipals], [KeyPrincipal], [Occupation], [Type], [CRN], [DateOfApplication], [Channel], [IsIDUploaded], [State], [VerifiedChannel], [VerifiedBy], [Telephone], [EmailAddress], [Mobile]) VALUES (9, CAST(0x0000A62D00000000 AS DateTime), N'FX Money Ltd', 6, N'Jack', N'Director', N'Private Company Limited by Guarantee', 1649798, CAST(0x0000A61800000000 AS DateTime), N'Web', N'Yes', N'Unsuitable', N'Manual', NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Customer] OFF
SET IDENTITY_INSERT [dbo].[UserManagement] ON 

INSERT [dbo].[UserManagement] ([UserID], [UserName], [Email], [Password], [FirstName], [LastName], [CreatedOn], [LastLoginDate], [AccessToken]) VALUES (1, N'admin', N'master@admin.com', N'a29c57c6894dee6e8251510d58c07078ee3f49bf', N'Master', N'Admin', CAST(0x0000A62C00000000 AS DateTime), NULL, NULL)
INSERT [dbo].[UserManagement] ([UserID], [UserName], [Email], [Password], [FirstName], [LastName], [CreatedOn], [LastLoginDate], [AccessToken]) VALUES (2, N'superuser', N'super@user.com', N'a29c57c6894dee6e8251510d58c07078ee3f49bf', N'Super', N'User', CAST(0x0000A62C00000000 AS DateTime), NULL, NULL)
SET IDENTITY_INSERT [dbo].[UserManagement] OFF
SET IDENTITY_INSERT [dbo].[UserPreferences] ON 

INSERT [dbo].[UserPreferences] ([ID], [UserID], [PreferenceType], [PageName], [ColumnName], [PrferenceOrder], [SortDirection], [IsHide], [CreatedOn], [ModifedOn]) VALUES (10928, 1, N'SO', N'Customer', N'BusinessName', 1, N'asc', 0, NULL, NULL)
SET IDENTITY_INSERT [dbo].[UserPreferences] OFF
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_UserManagement]    Script Date: 6/24/2016 8:05:55 PM ******/
ALTER TABLE [dbo].[UserManagement] ADD  CONSTRAINT [IX_UserManagement] UNIQUE NONCLUSTERED 
(
	[UserName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_UserManagement_1]    Script Date: 6/24/2016 8:05:55 PM ******/
ALTER TABLE [dbo].[UserManagement] ADD  CONSTRAINT [IX_UserManagement_1] UNIQUE NONCLUSTERED 
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserPreferences] ADD  DEFAULT ((0)) FOR [IsHide]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'CS-ColumnSequence, SO-SortOrder, CW-ColumnWidth, SH-ShowHide,PL - Pin Left, PR - Pin Right' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'UserPreferences', @level2type=N'COLUMN',@level2name=N'PreferenceType'
GO
USE [master]
GO
ALTER DATABASE [NodeCRM] SET  READ_WRITE 
GO
