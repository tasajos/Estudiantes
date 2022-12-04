using Microsoft.EntityFrameworkCore;


namespace BE_CRUD_ESTUDIANTES.Models
{
  public class applicationdb : DbContext
  {
    public applicationdb(DbContextOptions<applicationdb> options):base(options) {

    }

    public DbSet<estudiante> estudiantes { get; set; }

  }
}
