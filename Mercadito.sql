  
  
USE master
GO
  
IF EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'Mercado'
)
DROP DATABASE Mercado
Go

CREATE DATABASE Mercado
GO

Use  Mercado
  
IF OBJECT_ID('dbo.CatalogoCuentas', 'U') IS NOT NULL
DROP TABLE dbo.CatalogoCuentas
GO
      
CREATE TABLE dbo.CatalogoCuentas
(
    cuenta_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),       
    cuenta [NVARCHAR](100) NOT NULL,
    saldo [INT] NOT NULL
          
    
);
GO


  
  
IF OBJECT_ID('dbo.Categoria', 'U') IS NOT NULL
DROP TABLE dbo.Categoria
GO
      
CREATE TABLE dbo.Categoria
(
    categoria_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),       
    nombre [NVARCHAR](50) NOT NULL,
    descripcion [NVARCHAR](200) NOT NULL
          
);
GO

  
  
IF OBJECT_ID('dbo.InformarcionGeneral', 'U') IS NOT NULL
DROP TABLE dbo.InformarcionGeneral
GO
      
CREATE TABLE dbo.InformarcionGeneral
(
    InformarcionGeneralId INT NOT NULL PRIMARY KEY IDENTITY(1,1),       
    telefono [NVARCHAR](50) NOT NULL,
    direccion [NVARCHAR](50) NOT NULL
          
);
GO

  
  
IF OBJECT_ID('dbo.Proveedor', 'U') IS NOT NULL
DROP TABLE dbo.Proveedor
GO
      
CREATE TABLE dbo.Proveedor
(
    proveedor_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),       
    nombre [NVARCHAR](200) NOT NULL,
    empresa [NVARCHAR](150) NOT NULL,
    InformarcionGeneralId [INT] NOT NULL
          
    CONSTRAINT fk_Proveedor FOREIGN KEY (InformarcionGeneralId) REFERENCES InformarcionGeneral(InformarcionGeneralId)
);
GO

  
  
IF OBJECT_ID('dbo.Producto', 'U') IS NOT NULL
DROP TABLE dbo.Producto
GO
      
CREATE TABLE dbo.Producto
(
    producto_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),       
    nombre [NVARCHAR](200) NOT NULL,
    costo_compra [INT] NOT NULL,
    precio_venta [INT] NOT NULL,
    existencias [INT] NOT NULL,
    proveedor_id [INT] NOT NULL,
    categoria_id [INT] NOT NULL
          
    CONSTRAINT fk_Producto1 FOREIGN KEY (proveedor_id) REFERENCES Proveedor(proveedor_id),
    CONSTRAINT fk_Producto2 FOREIGN KEY (categoria_id) REFERENCES Categoria(categoria_id)

);
GO

  
  
IF OBJECT_ID('dbo.Cuenta_Contable', 'U') IS NOT NULL
DROP TABLE dbo.Cuenta_Contable
GO
      
CREATE TABLE dbo.Cuenta_Contable
(
    cuentaContable_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),       
    cuenta_id [INT] NOT NULL,
    debe [INT] NOT NULL, 
    haber [INT] NOT NULL,
    concepto [NVARCHAR](50) NOT NULL,
    fecha [NVARCHAR](50) NOT NULL
          
    CONSTRAINT fk_Cuenta_Contable FOREIGN KEY (cuenta_id) REFERENCES CatalogoCuentas(cuenta_id)
);
GO

  
  
IF OBJECT_ID('dbo.Cliente', 'U') IS NOT NULL
DROP TABLE dbo.Cliente
GO
      
CREATE TABLE dbo.Cliente
(
    cliente_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),       
    nombre [NVARCHAR](50) NOT NULL,
    credito [INT] NOT NULL, 
    saldo [INT] NOT NULL,
    InformarcionGeneralId [INT] NOT NULL
          
    CONSTRAINT fk_Cliente FOREIGN KEY (InformarcionGeneralId) REFERENCES InformarcionGeneral(InformarcionGeneralId)
);
GO



  
  
IF OBJECT_ID('dbo.Factura', 'U') IS NOT NULL
DROP TABLE dbo.Factura
GO
      
CREATE TABLE dbo.Factura
(
    factura_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),       
    cliente_id [INT] NOT NULL,
    fecha [NVARCHAR](50) NOT NULL,
    total [INT] NOT NULL
          
    CONSTRAINT fk_Factura FOREIGN KEY (cliente_id) REFERENCES Cliente(cliente_id)
);
GO

  
  
IF OBJECT_ID('dbo.Pago', 'U') IS NOT NULL
DROP TABLE dbo.Pago
GO
      
CREATE TABLE dbo.Pago
(
    pago_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),       
    cliente_id [INT] NOT NULL,
    cuentaContable_id [INT] NOT NULL
          
    CONSTRAINT fk_Pago1 FOREIGN KEY (cliente_id) REFERENCES Cliente(cliente_id),
    CONSTRAINT fk_Pago2 FOREIGN KEY (cuentaContable_id) REFERENCES  Cuenta_Contable(cuentaContable_id)
);
GO

  
  
IF OBJECT_ID('dbo.Pedidos', 'U') IS NOT NULL
DROP TABLE dbo.Pedidos
GO
      
CREATE TABLE dbo.Pedidos
(
    pedido_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),       
    proveedor_id [INT] NOT NULL,
    fecha_emision [NVARCHAR](50) NOT NULL,
    fecha_entrega [NVARCHAR](50) NOT NULL,
    monto_total [INT] NOT NULL
        
    CONSTRAINT fk_Pedidos FOREIGN KEY (proveedor_id) REFERENCES  Proveedor(proveedor_id)
);
GO

  
  
IF OBJECT_ID('dbo.FacturaDetalle', 'U') IS NOT NULL
DROP TABLE dbo.FacturaDetalle
GO
      
CREATE TABLE dbo.FacturaDetalle
(
    facturaDetalle_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),       
    factura_id [INT] NOT NULL,
    producto_id [INT] NOT NULL,
    cantidad [INT] NOT NULL,
    precio [INT] NOT NULL
          
    CONSTRAINT fk_FacturaDetalle1 FOREIGN KEY (factura_id) REFERENCES  Factura(factura_id),
    CONSTRAINT fk_FacturaDetalle2 FOREIGN KEY (producto_id) REFERENCES  Producto(producto_id)
    
);
GO

  
  
IF OBJECT_ID('dbo.PedidoDetalle', 'U') IS NOT NULL
DROP TABLE dbo.PedidoDetalle
GO
      
CREATE TABLE dbo.PedidoDetalle
(
    pedidoDetalle_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),       
    producto_id [INT] NOT NULL,
    pedido_id [INT] NOT NULL,
    costo_unitario [INT] NOT NULL,
    cantidad [INT] NOT NULL
          
    CONSTRAINT fk_PedidoDetalle1 FOREIGN KEY (producto_id) REFERENCES  Producto(producto_id),
    CONSTRAINT fk_PedidoDetalle2 FOREIGN KEY (pedido_id) REFERENCES  Pedidos(pedido_id)
);
GO

      
INSERT INTO CatalogoCuentas
(       
    [cuenta], [saldo]
)
VALUES
(       
  'caja', 2000
)
     
GO


      
INSERT INTO Categoria
(       
  [nombre], [descripcion]
)
VALUES
(       
  'embutido', 'hotdog de pollo'
),
(       
  'pollo', 'pollo congelado'
)
     
GO


      
INSERT INTO InformarcionGeneral
(       
    [telefono], [direccion]
)
VALUES
(       
 '94978935', 'Barrio Wameru bloque 2'
),
(     
 '99568574', '2 Ave 6 Calle'
),
(
'99871232', '5 Ave 3 Calle'
),
(     
 '98768574', '9 Ave 15 Calle'
)
     
GO


      
INSERT INTO Proveedor
(       
 [nombre], [empresa], [InformarcionGeneralId]
)
VALUES
(       
 'Jared', 'Delicia', 1 
),
(     
 'Fernando', 'Norteño', 3
)
     
GO



      
INSERT INTO Producto
(       
 [nombre], [costo_compra], [precio_venta], [existencias], [proveedor_id], [categoria_id]
)
VALUES
(       
 'hotdog', 65, 100, 30, 1, 1
),
(     
 'pollo', 30, 150, 50, 2, 2
)
     
GO


      
INSERT INTO Cuenta_Contable

(       
 [cuenta_id], [debe], [haber], [concepto],  [fecha]
)
VALUES
(       
 1, 2000, 2000, 'pago', '24/7/2020'
),
(     
 1, 2000, 1500, 'abono', '26/7/2020'
)
     
GO


      
INSERT INTO Cliente


(       
 [nombre], [credito], [saldo], [InformarcionGeneralId]
)
VALUES
(       
 'David', 300, 250, 2
),
(     
 'Elias', 350, 50, 4
)
     
GO


      
INSERT INTO Factura
(       
 [cliente_id], [fecha], [total]
)
VALUES
(       
 1, '24/5/2020', 200
),
(     
 2, '26/5/2020', 450
)
     
GO


      
INSERT INTO Pago
(       
 [cliente_id], [cuentaContable_id]
)
VALUES
(       
 1, 1
),
(     
 1, 1
)
     
GO


      
INSERT INTO Pedidos

(       
 [proveedor_id], [fecha_emision], [fecha_entrega], [monto_total]
)
VALUES
(       
 1, '1/5/2020', '6/5/2020', 4550
),
(     
 2, '2/5/2020', '7/5/2020', 5600
)
     
GO


      
INSERT INTO FacturaDetalle

(       
 [factura_id], [producto_id], [cantidad], [precio]
)
VALUES
(       
 1, 1, 2, 100
),
(     
 1, 2, 3, 150
)
     
GO


      
INSERT INTO PedidoDetalle

(       
 [producto_id], [pedido_id], [costo_unitario], [cantidad]
)
VALUES
(       
 1, 1, 4, 300
),
(     
 2, 2, 30, 180
)
     
GO

  
SELECT * FROM dbo.CatalogoCuentas
GO

 
SELECT * FROM dbo.Categoria
GO

 
SELECT * FROM dbo.InformarcionGeneral
GO

 
SELECT * FROM dbo.Proveedor
GO

 
SELECT * FROM dbo.Producto
GO

 
SELECT * FROM dbo.Cuenta_Contable
GO

 
SELECT * FROM dbo.Cliente
GO

 
SELECT * FROM dbo.Factura
GO

 
SELECT * FROM dbo.Pago
GO

 
SELECT * FROM dbo.Pedidos
GO

 
SELECT * FROM dbo.FacturaDetalle
GO

 
SELECT * FROM dbo.PedidoDetalle
GO


Select * from Cliente
Select * from Pago

SELECT Cliente.nombre, Cliente.credito ,Cliente.Saldo, Pago.pago_id 
FROM Pago 
join Cliente on Pago.cliente_id = Cliente.cliente_id
WHERE Cliente.saldo BETWEEN Cliente.credito - 100 AND Cliente.credito

Select * from Cliente
Select * from Factura
Select * from FacturaDetalle
Select * from Producto

SELECT Cliente.nombre, Factura.fecha, Producto.nombre, FacturaDetalle.precio, 
FacturaDetalle.cantidad, Factura.total 
FROM Factura
join Cliente on Factura.cliente_id = Cliente.cliente_id 
join FacturaDetalle on Factura.factura_id = FacturaDetalle.factura_id 
join Producto on FacturaDetalle.producto_id = Producto.producto_id