using Sferix.SPO.Core.Model;
using Sferix.SPO.Provider.SQLite;
using Xunit;

namespace Sferix.SPO.MiddleTier.Tests;

public sealed class FrankenSpoPackageTests
{
    [Fact]
    public void SavedObjectReadsBackThroughThePinnedFrankenSpoBuild()
    {
        var path = Path.Combine(Path.GetTempPath(), $"spo-MiddleTier-{Guid.NewGuid():N}.db");
        try
        {
            var model = new SpoModelBuilder().AddModule<NoteModule>().Build(new SqliteProvider());
            Guid id;
            using (var space = model.OpenObjectSpace($"Data Source={path};Pooling=False"))
            {
                id = space.Add(new Note { Text = "hello" }).Id;
                space.SaveChanges();
            }
            using (var space = model.OpenObjectSpace($"Data Source={path};Pooling=False"))
            {
                Assert.Equal("hello", space.Get<Note>(id)?.Text);
            }
        }
        finally
        {
            File.Delete(path);
        }
    }
}
