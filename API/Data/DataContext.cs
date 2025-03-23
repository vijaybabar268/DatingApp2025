using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions opt)
        : base(opt)
    {
    }

    public DbSet<AppUser> Users { get; set; }
}
