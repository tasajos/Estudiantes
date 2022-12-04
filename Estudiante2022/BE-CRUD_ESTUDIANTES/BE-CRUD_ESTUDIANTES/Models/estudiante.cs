namespace BE_CRUD_ESTUDIANTES.Models
{
  public class estudiante
  {
    public int id { get; set; }
    public string nombre { get; set; }
    public string apellido { get; set;}
    public int curso { get; set;}
    public string telefono { get; set;}
    public string edad { get; set;}
    public DateTime fecha_creacion { get; set;}

  }
}
